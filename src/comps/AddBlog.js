import {useForm} from 'react-hook-form';

const AddBlog = () => {

    const{register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return ( 
        <div>
        <div>Add blogs</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" ref={register} />
            <input type="password" ref={register} />
            <button>Submit</button>
        </form>

        </div>
     );
}
 
export default AddBlog;