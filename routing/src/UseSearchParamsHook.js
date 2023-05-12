import {useSearchParams} from 'react-router-dom'
function UseSearchParamsHook()
{
    const [searchParam,setSearchParam]=useSearchParams();
return(
<>
<h1> useSearchParamsHook only used for query element access</h1>
<p>age from url <b>{searchParam.get('age')}</b></p>
<p>Name from url <b>{searchParam.get('name')}</b></p>
<p>userId from url <b>{searchParam.get('userId')}</b></p>
</>)


}
export default UseSearchParamsHook;