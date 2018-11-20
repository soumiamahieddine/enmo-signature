<?php

/**
* Copyright Maarch since 2008 under licence GPLv3.
* See LICENCE.txt file at the root folder for more details.
* This file is part of Maarch software.
*
*/

/**
* @brief History Model
* @author dev@maarch.org
*/

namespace History\models;

use SrcCore\models\ValidatorModel;
use SrcCore\models\DatabaseModel;

abstract class HistoryModelAbstract
{
    public static function create(array $aArgs)
    {
        ValidatorModel::notEmpty($aArgs, ['tableName', 'recordId', 'eventType', 'userId', 'info']);
        ValidatorModel::stringType($aArgs, ['tableName', 'eventType', 'info']);
        ValidatorModel::intVal($aArgs, ['userId']);

        DatabaseModel::insert([
            'table'         => 'history',
            'columnsValues' => [
                'table_name' => $aArgs['tableName'],
                'record_id'  => $aArgs['recordId'],
                'event_type' => $aArgs['eventType'],
                'user_id'    => $aArgs['userId'],
                'event_date' => 'CURRENT_TIMESTAMP',
                'info'       => $aArgs['info'],
                'remote_ip'  => $_SERVER['REMOTE_ADDR']
            ]
        ]);

        return true;
    }
}
