import React from 'react';
import {bindActionCreators} from '../redux';
import ReactReduxContext from './context';
/**
此方法负责把组件和仓库进行关联，或者说进行连接
 */
export default function(mapStateToProps,actions){
   return function (WrappedComponent){
        return class extends React.Component{
            static contextType = ReactReduxContext;
            constructor(props,context){
                super(props);
                console.log(this.context, context, '----context-------')
                //{counter1:{number:0},counter2:{number:0}}
                this.state = mapStateToProps(this.context.store.getState());
                if(typeof actions == 'function'){
                    this.boundActions = actions(this.context.store.dispatch,props);
                }else{
                    this.boundActions = bindActionCreators(actions,this.context.store.dispatch);
                } 
            }
            shouldComponentUpdate(newProps,nextState){
                if(this.state === mapStateToProps(this.context.store.getState())){
                    return false;
                }
                return true;
            }
            componentDidMount(){
                this.unsubscribe = this.context.store.subscribe(
                    ()=>this.setState(mapStateToProps(this.context.store.getState())));
            }
            componentWillUnmount(){
                this.unsubscribe();
            }
            render(){
                return <WrappedComponent {...this.state} {...this.boundActions}/>
            }
     }
   }  
}