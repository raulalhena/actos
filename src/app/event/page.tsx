import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';

const page = () => {

    const categories = [ 'Global', 'Empleabilidad', 'Bienestar Emocional' ];
    
    return (
        <>
            <h1>Crea tu proprio evento</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <form>
                <TextInput
                    id="event"
                    label="Nombre del evento*"
                    placeholder="Evento"
                />
                <Select
                    id="categoryEvent"
                    label="category" 
                    options={categories}  
                />
                <TextInput 
                    id="tag"
                    label="Etiquetas"
                    placeholder="Tags"
                />
                <TextInput 
                    id="direction"
                    label="Añade una dirección"
                    placeholder="Escribe la dirección de tu evento."
                />
                <TextInput 
                    id="webLink"
                    label="Añade un enlace"
                    placeholder="Escribe el enlace de tu evento."
                />

                <button>Guardar y Continuar</button>
            </form>
        </>
    );
};

export default page;