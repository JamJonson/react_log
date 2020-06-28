import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../components/MyNavLink'
import news from './news'
import message from './message'
export default class Home extends React.Component{
  render() {
    return (
      <div style={{padding: '50px'}}>
        <div>
         <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">news</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">message</MyNavLink>
          </li>
         </ul>
        </div>
        <div>
        <Switch>
          <Route path="/home/news" component={news} />
          <Route path="/home/message" component={message} />
          <Redirect to='/home/news'/> 
          </Switch>
        </div>
      </div>
    )
  }
}