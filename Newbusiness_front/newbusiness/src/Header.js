import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className="header-left">
          <div className="logo">[NEWBUSINESSNAME]</div>
        </div>
        <div className="header-right">
          
          <a href="#" class="login">商品一覧</a> 
        </div>
        <div className="header-right">
          <a href="#" className="login">ブランド</a> 
        </div>
        <div className="header-right">
          <a href="#" className="login">ランキング</a> 
        </div>
        <div className="header-right">
          <a href="#" className="login">ログイン</a> 
        </div>
        <div className="header-right">
          <a href="#" className="login">ご利用方法</a> 
        </div>
        <div className="header-right">
          <a href="#" className="login">ヘルプ</a> 
        </div>
        
      </div>
    );
  }
}

export default Header;
