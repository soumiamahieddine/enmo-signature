<?php

/**
* Copyright Maarch since 2008 under license.
* See LICENSE.txt file at the root folder for more details.
* This file is part of Maarch software.
*
*/

use PHPUnit\Framework\TestCase;

class AuthenticationControllerTest extends TestCase
{
    public function testGetInformations()
    {
        $authenticationController = new \SrcCore\controllers\AuthenticationController();

        $environment    = \Slim\Http\Environment::mock(['REQUEST_METHOD' => 'GET']);
        $request        = \Slim\Http\Request::createFromEnvironment($environment);

        $response     = $authenticationController->getInformations($request, new \Slim\Http\Response());
        $this->assertSame(200, $response->getStatusCode());
        $responseBody = json_decode((string)$response->getBody());

        $this->assertIsString($responseBody->connection);
        $this->assertIsBool($responseBody->changeKey);
        $this->assertNotEmpty($responseBody->connection);
    }

    public function testAuthenticate()
    {
        $authenticationController = new \SrcCore\controllers\AuthenticationController();

        $environment    = \Slim\Http\Environment::mock(['REQUEST_METHOD' => 'POST']);
        $request        = \Slim\Http\Request::createFromEnvironment($environment);

        $aArgs = [
            'login'     => 'superadmin@maarch.com',
            'password'  => 'maarch@'
        ];
        $fullRequest = \httpRequestCustom::addContentInBody($aArgs, $request);
        $response     = $authenticationController->authenticate($fullRequest, new \Slim\Http\Response());
        $this->assertSame(204, $response->getStatusCode());

        //  ERRORS
        $aArgs = [
            'login'     => 'jenny.jane@maarch.com',
            'password'  => 'maarche'
        ];
        $fullRequest = \httpRequestCustom::addContentInBody($aArgs, $request);
        $response     = $authenticationController->authenticate($fullRequest, new \Slim\Http\Response());
        $this->assertSame(401, $response->getStatusCode());
        $responseBody = json_decode((string)$response->getBody());

        $this->assertSame('Authentication Failed', $responseBody->errors);

        $aArgs = [
            'logi'     => 'jenny.jane@maarch.com',
            'password'  => 'maarche'
        ];
        $fullRequest = \httpRequestCustom::addContentInBody($aArgs, $request);
        $response     = $authenticationController->authenticate($fullRequest, new \Slim\Http\Response());
        $this->assertSame(400, $response->getStatusCode());
        $responseBody = json_decode((string)$response->getBody());

        $this->assertSame('Bad Request', $responseBody->errors);
    }

    public function testAuthentication()
    {
        $_SERVER['PHP_AUTH_USER'] = 'superadmin@maarch.com';
        $_SERVER['PHP_AUTH_PW'] = 'maarch@';

        $response = \SrcCore\controllers\AuthenticationController::authentication();

        $this->assertNotEmpty($response);
        $this->assertIsInt($response);
    }
}
