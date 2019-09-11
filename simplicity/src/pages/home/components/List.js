import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render () {
        const { list, getMoreList, currentPage } = this.props;
        return (
            <div>
                {
                    list.map((item,index) => {
                        return (
                            <Link key={index} to={ '/detail/' + item.get('id')}>
                                <ListItem>
                                    <img className='pic' src={item.get('imgUrl')} alt=""/>
                                    <ListInfo>
                                        <h3 className='title'>{ item.get('title') }</h3>
                                        <p className='desc'>{ item.get('desc') }</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=> {getMoreList(currentPage)}}>LoadMore</LoadMore>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','articleList']),
    currentPage: state.getIn(['home','articleCurrentPage'])
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList(currentPage) {
        dispatch(actionCreators.getMoreList(currentPage))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List)