<?php

/**
 * Copyright Maarch since 2008 under licence GPLv3.
 * See LICENCE.txt file at the root folder for more details.
 * This file is part of Maarch software.
 *
 */

/**
 * @brief Adr Model
 * @author dev@maarch.org
 */

namespace Convert\models;

use SrcCore\models\DatabaseModel;
use SrcCore\models\ValidatorModel;

class AdrModel
{
    public static function getDocumentsAdr(array $aArgs)
    {
        ValidatorModel::arrayType($aArgs, ['select', 'where', 'data']);

        $addresses = DatabaseModel::select([
            'select'    => empty($aArgs['select']) ? ['*'] : $aArgs['select'],
            'table'     => ['adr_main_documents'],
            'where'     => empty($aArgs['where']) ? [] : $aArgs['where'],
            'data'      => empty($aArgs['data']) ? [] : $aArgs['data'],
        ]);

        return $addresses;
    }

    public static function getAttachmentsAdr(array $aArgs)
    {
        ValidatorModel::arrayType($aArgs, ['select', 'where', 'data']);

        $addresses = DatabaseModel::select([
            'select'    => empty($aArgs['select']) ? ['*'] : $aArgs['select'],
            'table'     => ['adr_attachments'],
            'where'     => empty($aArgs['where']) ? [] : $aArgs['where'],
            'data'      => empty($aArgs['data']) ? [] : $aArgs['data'],
        ]);

        return $addresses;
    }

    public static function createDocumentAdr(array $aArgs)
    {
        ValidatorModel::notEmpty($aArgs, ['documentId', 'type', 'path', 'filename', 'fingerprint']);
        ValidatorModel::stringType($aArgs, ['type', 'path', 'filename', 'fingerprint']);
        ValidatorModel::intVal($aArgs, ['documentId']);

        DatabaseModel::insert([
            'table'         => 'adr_main_documents',
            'columnsValues' => [
                'main_document_id'  => $aArgs['documentId'],
                'type'              => $aArgs['type'],
                'path'              => $aArgs['path'],
                'filename'          => $aArgs['filename'],
                'fingerprint'       => $aArgs['fingerprint'],
            ]
        ]);

        return true;
    }
}
