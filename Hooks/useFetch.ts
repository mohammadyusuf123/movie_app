import { useEffect, useState } from "react";



const useFetch=<T>(fetchFunction:()=>Promise<T>,autoFetch=true)=>{
const [data,setData]=useState<T|null>(null);
const [loading,setLoading]=useState(true);
const [error,setError]=useState<Error|null>(null);

const fetchData=async()=>{
    try{
        setLoading(true);
        setError(null);
        const data=await fetchFunction();
        setData(data);
    }catch(err){
        setError(err instanceof Error ? err : new Error("An error occurred"));
    }finally{
        setLoading(false);
    }
    };
    
    const reset = () => {
        setData(null);
        setLoading(true);
        setError(null);
    };


useEffect(() => {
    if (autoFetch) {
        fetchData();
    }
}, []);

return { data, loading, error, refetch:fetchData, reset };
}

export default useFetch;
