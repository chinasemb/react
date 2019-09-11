import React, { PureComponent } from 'react'
import  { connect } from 'react-redux'
import { WriterWrapper, Title, AuthorListWrapper, AuthorItem, AuthorInfo, FindMore } from '../style'

class Writer extends PureComponent {
    render () {
        const { list } = this.props
        return (
            <WriterWrapper>
                <Title>
                    <p className='left'>推荐作者</p>
                    <p className='right'>
                        <i className='iconfont change'>&#xed2a;</i>
                        换一批
                    </p>
                </Title>
                {
                    list.map((item)=> {
                        return(
                            <AuthorListWrapper key={item.get('id')}>
                                <AuthorItem >
                                    <img className='left' src={item.get('imgUrl')} alt=""/>
                                    <AuthorInfo className='right'>
                                        <div className="p">
                                            <p className="name">{item.get('name')}</p>
                                            <p className="like">{item.get('like')}</p>
                                        </div>
                                        <div className="add"><i className='iconfont adds'>&#xe600;</i>关注</div>
                                    </AuthorInfo>
                                </AuthorItem>
                            </AuthorListWrapper>
                        )
                    })
                }
                <FindMore>
                    查看更多
                </FindMore>
            </WriterWrapper>
                
            
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','WriterList'])
})

export default connect(mapStateToProps,null)(Writer)