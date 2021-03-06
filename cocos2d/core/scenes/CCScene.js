/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


/**
 * <p>cc.Scene继承自cc.Node并且只作为抽象类使用</p>
 * <p>cc.Scene 和 cc.Node 除了cc.Scene的锚点默认在屏幕中心以外几乎相同</p>
 * <p>目前cc.Scene没有比cc.Node多出额外的逻辑，但是未来可能会加入</p>
 * <p>将你的节点继承自cc.Sence是一个很好的实践方法(自己的节点集成自cc.Sence总是好的)</p>
 * @class
 * @extends cc.Node
 * @example
 * var scene = new cc.Scene();
 */
cc.Scene = cc.Node.extend(/** @lends cc.Scene# */{
    /**
     * cc.Scene的构造函数
     */
    _className:"Scene",
    ctor:function () {
        cc.Node.prototype.ctor.call(this);
        this._ignoreAnchorPointForPosition = true;
        this.setAnchorPoint(0.5, 0.5);
        this.setContentSize(cc.director.getWinSize());
    }
});

/**
 * 创建一个场景类
 * @deprecated since v3.0,please use new cc.Scene() instead.
 * @return {cc.Scene}
 */
cc.Scene.create = function () {
    return new cc.Scene();
};
