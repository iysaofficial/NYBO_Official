import '@/assets/css/registration/HomeRegistration.css'
import { redirect } from 'next/navigation';
// import HomeRegistrationComp from '@/components/registration/HomeRegistrationComp'

const HomeRegistrationPage = () =>{
    redirect('/');
    return null;
    // return(
    //     <>
    //     <HomeRegistrationComp></HomeRegistrationComp>
    //     </>
    // )
}

export default HomeRegistrationPage
