import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendItem, RecommendInfo, RecommendWrapper  } from '../style'

class Recommend extends PureComponent {
    render () {
        const { list } = this.props
        return (
            <RecommendWrapper>
                {
                    list.map((item)=> {
                        return (
                            <RecommendItem key={item.get('id')}>
                                <RecommendInfo>
                                    <a href={item.get('aUrl')}>
                                        <img className='pic' src={item.get('imgUrl')} alt=""/>
                                    </a>
                                </RecommendInfo>
                            </RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','recommendList'])
})

export default connect(mapStateToProps,null)(Recommend)