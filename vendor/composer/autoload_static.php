<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit637514d10f1ed5d4c55a005a428a3656
{
    public static $files = array (
        '253c157292f75eb38082b5acb06f3f01' => __DIR__ . '/..' . '/nikic/fast-route/src/functions.php',
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        's' => 
        array (
            'setasign\\Fpdi\\' => 14,
        ),
        'U' => 
        array (
            'User\\' => 5,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Status\\' => 7,
            'SrcCore\\' => 8,
            'Slim\\' => 5,
        ),
        'R' => 
        array (
            'Respect\\Validation\\' => 19,
        ),
        'P' => 
        array (
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Container\\' => 14,
            'PHPMailer\\PHPMailer\\' => 20,
        ),
        'I' => 
        array (
            'Interop\\Container\\' => 18,
        ),
        'H' => 
        array (
            'History\\' => 8,
        ),
        'F' => 
        array (
            'FastRoute\\' => 10,
        ),
        'E' => 
        array (
            'Email\\' => 6,
        ),
        'D' => 
        array (
            'Document\\' => 9,
            'Docserver\\' => 10,
        ),
        'C' => 
        array (
            'Convert\\' => 8,
            'Configuration\\' => 14,
        ),
        'A' => 
        array (
            'Attachment\\' => 11,
            'Action\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'setasign\\Fpdi\\' => 
        array (
            0 => __DIR__ . '/..' . '/setasign/fpdi/src',
        ),
        'User\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/user',
        ),
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Status\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/status',
        ),
        'SrcCore\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/core',
        ),
        'Slim\\' => 
        array (
            0 => __DIR__ . '/..' . '/slim/slim/Slim',
        ),
        'Respect\\Validation\\' => 
        array (
            0 => __DIR__ . '/..' . '/respect/validation/library',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
        'Interop\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/container-interop/container-interop/src/Interop/Container',
        ),
        'History\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/history',
        ),
        'FastRoute\\' => 
        array (
            0 => __DIR__ . '/..' . '/nikic/fast-route/src',
        ),
        'Email\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/email',
        ),
        'Document\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/document',
        ),
        'Docserver\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/docserver',
        ),
        'Convert\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/convert',
        ),
        'Configuration\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/configuration',
        ),
        'Attachment\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/attachment',
        ),
        'Action\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app/action',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'Pimple' => 
            array (
                0 => __DIR__ . '/..' . '/pimple/pimple/src',
            ),
        ),
    );

    public static $classMap = array (
        'Datamatrix' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/datamatrix.php',
        'PDF417' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/pdf417.php',
        'QRcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/qrcode.php',
        'TCPDF' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf.php',
        'TCPDF2DBarcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_barcodes_2d.php',
        'TCPDFBarcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_barcodes_1d.php',
        'TCPDF_COLORS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_colors.php',
        'TCPDF_FILTERS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_filters.php',
        'TCPDF_FONTS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_fonts.php',
        'TCPDF_FONT_DATA' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_font_data.php',
        'TCPDF_IMAGES' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_images.php',
        'TCPDF_IMPORT' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_import.php',
        'TCPDF_PARSER' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_parser.php',
        'TCPDF_STATIC' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_static.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit637514d10f1ed5d4c55a005a428a3656::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit637514d10f1ed5d4c55a005a428a3656::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit637514d10f1ed5d4c55a005a428a3656::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit637514d10f1ed5d4c55a005a428a3656::$classMap;

        }, null, ClassLoader::class);
    }
}
