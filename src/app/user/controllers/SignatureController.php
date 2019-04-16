<?php

/**
* Copyright Maarch since 2008 under licence GPLv3.
* See LICENCE.txt file at the root folder for more details.
* This file is part of Maarch software.
*
*/

/**
* @brief Signature Controller
* @author dev@maarch.org
*/

namespace User\controllers;

use Docserver\controllers\DocserverController;
use Docserver\models\DocserverModel;
use History\controllers\HistoryController;
use Respect\Validation\Validator;
use Slim\Http\Request;
use Slim\Http\Response;
use User\models\SignatureModel;

class SignatureController
{
    public function get(Request $request, Response $response, array $args)
    {
        if ($GLOBALS['id'] != $args['id'] && !UserController::hasPrivilege(['userId' => $GLOBALS['id'], 'privilege' => 'manage_users'])) {
            return $response->withStatus(403)->withJson(['errors' => 'Privilege forbidden']);
        }

        $data = $request->getQueryParams();
        if (empty($data['offset']) || !is_numeric($data['offset'])) {
            $data['offset'] = 0;
        }
        if (empty($data['limit']) || !is_numeric($data['limit'])) {
            $data['limit'] = 0;
        }

        $rawSignatures = SignatureModel::get([
            'select'    => ['id', 'path', 'filename', 'fingerprint'],
            'where'     => ['user_id = ?'],
            'data'      => [$args['id']],
            'orderBy'   => ['id DESC'],
            'offset'    => (int)$data['offset'],
            'limit'     => (int)$data['limit']
        ]);
        $docserver = DocserverModel::getByType(['type' => 'SIGNATURE', 'select' => ['path']]);
        if (empty($docserver['path']) || !file_exists($docserver['path'])) {
            return $response->withStatus(400)->withJson(['errors' => 'Docserver does not exist']);
        }

        $signatures = [];
        foreach ($rawSignatures as $signature) {
            $pathToSignature = $docserver['path'] . $signature['path'] . $signature['filename'];
            if (file_exists($pathToSignature)) {
                $fingerprint = DocserverController::getFingerPrint(['path' => $pathToSignature]);
                if ($signature['fingerprint'] == $fingerprint) {
                    $signatures[] = [
                        'id'                => $signature['id'],
                        'encodedSignature'  => base64_encode(file_get_contents($pathToSignature))
                    ];
                } else {
                    //TODO LOG
                }
            } else {
                //TODO LOG
            }
        }

        return $response->withJson(['signatures' => $signatures]);
    }

    public function create(Request $request, Response $response, array $args)
    {
        if ($GLOBALS['id'] != $args['id'] && !UserController::hasPrivilege(['userId' => $GLOBALS['id'], 'privilege' => 'manage_users'])) {
            return $response->withStatus(403)->withJson(['errors' => 'Privilege forbidden']);
        }

        $body = $request->getParsedBody();

        $check = Validator::notEmpty()->validate($body['encodedSignature']);
        $check = $check && Validator::stringType()->notEmpty()->validate($body['format']);
        if (!$check) {
            return $response->withStatus(400)->withJson(['errors' => 'Bad Request']);
        }

        $storeInfos = DocserverController::storeResourceOnDocServer([
            'encodedFile'       => $body['encodedSignature'],
            'format'            => $body['format'],
            'docserverType'     => 'SIGNATURE'
        ]);

        if (!empty($storeInfos['errors'])) {
            return $response->withStatus(500)->withJson(['errors' => $storeInfos['errors']]);
        }

        $id = SignatureModel::create([
            'userId'                => $args['id'],
            'path'                  => $storeInfos['path'],
            'filename'              => $storeInfos['filename'],
            'fingerprint'           => $storeInfos['fingerprint'],
            'external_application'  => null
        ]);

        HistoryController::add([
            'code'          => 'OK',
            'objectType'    => 'signatures',
            'objectId'      => $id,
            'type'          => 'CREATION',
            'message'       => '{userSignatureAdded}',
            'data'          => ['userId' => $args['id']]
        ]);

        return $response->withJson(['signatureId' => $id]);
    }

    public function delete(Request $request, Response $response, array $args)
    {
        if ($GLOBALS['id'] != $args['id'] && !UserController::hasPrivilege(['userId' => $GLOBALS['id'], 'privilege' => 'manage_users'])) {
            return $response->withStatus(403)->withJson(['errors' => 'Privilege forbidden']);
        }

        SignatureModel::delete(['where' => ['user_id = ?', 'id = ?'], 'data' => [$args['id'], $args['signatureId']]]);

        HistoryController::add([
            'code'          => 'OK',
            'objectType'    => 'signatures',
            'objectId'      => $args['signatureId'],
            'type'          => 'SUPPRESSION',
            'message'       => '{userSignatureDeleted}',
            'data'          => ['userId' => $args['id']]
        ]);

        return $response->withJson(['success' => 'success']);
    }

    public function updateExternalSignatures(Request $request, Response $response, array $args)
    {
        if ($GLOBALS['id'] != $args['id'] && !UserController::hasPrivilege(['userId' => $GLOBALS['id'], 'privilege' => 'manage_users'])) {
            return $response->withStatus(403)->withJson(['errors' => 'Privilege forbidden']);
        }

        $body = $request->getParsedBody();

        $img = file_get_contents('/home/damien/Documents/Test_Files/signature2.png'); //TODO remove

        if (!Validator::arrayType()->notEmpty()->validate($body['signatures'])) {
            return $response->withStatus(400)->withJson(['errors' => 'Body signature is empty or not an array']);
        } elseif (!Validator::stringType()->notEmpty()->validate($body['externalApplication'])) {
            return $response->withStatus(400)->withJson(['errors' => 'Body externalApplication is empty or not a string']);
        }

        foreach ($body['signatures'] as $key => $signature) {
            $signature['encodedSignature'] = $body['signatures'][$key]['encodedSignature'] = base64_encode($img); //TODO remove
            if (!Validator::notEmpty()->validate($signature['encodedSignature'])) {
                return $response->withStatus(400)->withJson(['errors' => "Body signatures[{$key}] encodedSignature is empty"]);
            } elseif (!Validator::stringType()->notEmpty()->validate($signature['format'])) {
                return $response->withStatus(400)->withJson(['errors' => "Body signatures[{$key}] format is empty or not a string"]);
            }
        }

        SignatureModel::delete(['where' => ['user_id = ?', 'external_application = ?'], 'data' => [$args['id'], $body['externalApplication']]]);

        foreach ($body['signatures'] as $signature) {
            $storeInfos = DocserverController::storeResourceOnDocServer([
                'encodedFile'       => $signature['encodedSignature'],
                'format'            => $signature['format'],
                'docserverType'     => 'SIGNATURE'
            ]);
            if (!empty($storeInfos['errors'])) {
                return $response->withStatus(500)->withJson(['errors' => $storeInfos['errors']]);
            }

            $id = SignatureModel::create([
                'userId'                => $args['id'],
                'path'                  => $storeInfos['path'],
                'filename'              => $storeInfos['filename'],
                'fingerprint'           => $storeInfos['fingerprint'],
                'external_application'  => $body['externalApplication']
            ]);

            HistoryController::add([
                'code'          => 'OK',
                'objectType'    => 'signatures',
                'objectId'      => $id,
                'type'          => 'CREATION',
                'message'       => '{userSignatureAdded}',
                'data'          => ['userId' => $args['id'], 'externalApplication' => $body['externalApplication']]
            ]);
        }

        return $response->withStatus(204);
    }
}
