import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float:left;
    .banner-img{
        width: 625px;
        height:270px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

// header start

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    ${'' /* background: pink; */}
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-bottom: 18px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 18px;
    .item-img{
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`

// header end 


// list start 

export const ListItem = styled.div `
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div `
    width: 500px;
    float: left;                        
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const RecommendItem = styled.div `
    position: relative;
    margin-bottom: 5px;
    width: 280px;
    height: 50px;
`

export const RecommendInfo = styled.div `                      
    .pic {
        width: 100%;
        height: 45px;
        border-radius: 4px;
    }
`

export const RecommendWrapper = styled.div `
    margin-top: 30px;
    width: 280px;
    height: 228 px;
    padding-bottom: 30px;
`

// list end 


// * Writer start 

export const WriterWrapper = styled.div `
    position: relative;
    padding: 15px 0 10px 0;
    ${'' /* border: 1px solid #f0f0f0; */}
`

export const Title = styled.div `
    overflow: hidden;
    font-size: 14px;
    color: #969696;
    .left{
        float: left;
        color: #ff0080;
    }
    .right{
        color: pink;
        margin-right: 3px;
        float: right;
        .change {
            margin-right: 3px;
            color: orange;
        }
    }
`

export const AuthorListWrapper = styled.div `
    padding: 5px 0;
`

export const AuthorItem = styled.div `
    overflow: hidden;
    margin: 5px 0;
    .left {
        float: left
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    .right{
        float: right;
        padding-left: 13px;
    }
`

export const AuthorInfo = styled.div `
    overflow: hidden;
    .p {
        float: left;
        margin-right: 46px;
        .name {
            color: #333;
            margin-top: 3px;
        }
        .like {
            color: #969696;
            margin-top: 9px;
            font-size: 12px;
            max-width: 128px;
        }
    }
    .add {
        float: right;
        font-size: 13px;
        .adds {
            margin-right: 3px;
        }
        color: #42C02E;
    }
`

// * Writer end 


// * Writer end 

export const FindMore = styled.div `
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 200px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin: 10px auto;
    text-align: center;
`

// * Writer end 


// * LoadMore start 

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer; 
`

// * LoadMore end 

// * BackTop start 

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
    background: orange;
    font-size: 12px;
    color: #fff;
`

// * BackTop end 