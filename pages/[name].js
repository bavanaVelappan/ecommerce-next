import {useRouter} from 'next/router';

const Name = () =>{
    const {name} = useRouter().query;
    return (
        <h1>Welcome {name}!</h1>
    );
}
 
export default Name;