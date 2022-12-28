import {NewsItem} from "../../components/NewsItem/NewsItem";
import {Comment} from "../../components/Comment/Comment";
import {useParams} from 'react-router-dom'
import {useGetFullNewsQuery} from '../../api/news.api'
export const FullNewsPage = () => {
    let {id}=useParams();
    if (!id){
        id='';
    }
    let {data,isLoading}=useGetFullNewsQuery(id);
    console.log(data)
    if(!data){
        return <div className='noData'>Нет новостей</div>
    }
    return (
        <>
        <NewsItem fullData={data} fullItem={true}/>
            {
                data?.comment?.length
                    ? data?.comment?.map((comment)=>{
                        return <>
                            <Comment key={comment.id} comment={comment}/>
                            {
                                comment.child.length ?
                                    comment.child.map((replay)=>{
                                        return <Comment replay = {replay} isReplay={true}/>
                                    })
                                    :<></>
                            }
                            </>
                    })
                    : <></>

            }
            {/*<Comment/>*/}
            {/*<Comment isReplay={true}/>*/}
            {/*<Comment/>*/}
            {/*<Comment isReplay={true}/>*/}
            {/*<Comment isReplay={true}/>*/}
            {/*<Comment isReplay={true}/>*/}
        </>
    );
};
