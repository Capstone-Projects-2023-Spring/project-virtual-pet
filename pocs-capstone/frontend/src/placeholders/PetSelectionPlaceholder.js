import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";



const avatar_type= "CT";
const total_xp= 0;
const last_interaction = "2023-03-09";
const last_feed= "2023-03-09";
const pet_name= "Daniel";
const flavour_text= "A kind and heartfelt boi"


const AVATAR_URL = '/avatar/'

const PetSelection = ()=> {


    const axiosPrivate = useAxiosPrivate();
    const controller = new AbortController();

    const navigate = useNavigate();
    const location = useLocation();
   
    
    const [pets,setPets] = useState()

    const nextPage = (page) => {
        navigate("/main")
    }

    const createPet = async (avatar_type,pet_name,total_xp,last_interaction,last_feed,flavour_text) => {
            try {
                const response = await axiosPrivate.post(AVATAR_URL,{signal:controller.signal},JSON.stringify({avatar_type,pet_name,total_xp,last_interaction,last_feed,flavour_text}),{headers:{'Content-type':'application/json'},WithCredentials:true})
                setPets(response?.data)
            }
            catch(err){
                console.log(err)
            }
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(AVATAR_URL, {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setPets(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => { //only fires if page closes or reloads
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <article>
            <h2>Pets List</h2>
            {pets?.length
                ? (
                    <Form>
                        <ul>
                            {pets.map((user, i) => <li key={i}>{pets?.pet_name}</li>)}
                        </ul>
                        <Button onClick={nextPage}>
                            Proceed?
                        </Button>
                    </Form>
                    
                ) : (
                <Form>
                    <p>No pets to display</p>
                    <Button onClick={createPet(avatar_type,pet_name,total_xp,last_interaction,last_feed,flavour_text)}>
                        Post new pet.
                    </Button>
                </Form>
                )
            }
        </article>
    );
}