<?php
// +----------------------------------------------------------------------
// | JSHOP [ 小程序 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017~2018 http://jihainet.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: mark <jima@jihainet.com>
// +----------------------------------------------------------------------
namespace app\b2c\controller;

use app\common\controller\Base;


class Index extends Base
{
    public function index()
    {
        $this->redirect('/wap/index','302');
    }
    public function t(){
        dump(config('?jshop.sms_password')?config('jshop.sms_password'):getSetting('sms_password'));
    }
}
