<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6178cc6b6b99ae9857475977ef764076
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Code\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Code\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6178cc6b6b99ae9857475977ef764076::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6178cc6b6b99ae9857475977ef764076::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}