import GroupMemberCard from '../GroupMemberCard';

export default function Footer() {
    return (
        <footer className="bg-blue-600 flex flex-col items-center p-4 ">
            <h1 className="text-white text-2xl m-9 text-center">GROUP MEMBERS</h1>
            <div className='flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6'>
                <GroupMemberCard 
                    name="ARTHUR FENILI" 
                    course="1TDSPC" 
                    rm="552752" 
                    photo="/arthur.jpg" 
                    email='arthur.fenili@hotmail.com' 
                    linkedin='https://www.linkedin.com/in/arthur-fenili/' 
                />
                <GroupMemberCard 
                    name="ENZO ANTUNES" 
                    course="1TDSPC" 
                    rm="553185" 
                    photo="/enzo.jpg" 
                    email='enzo2004antunes@gmail.com' 
                    linkedin='https://www.linkedin.com/in/enzo-antunes/' 
                />
                <GroupMemberCard 
                    name="VINICIO RAPHAEL" 
                    course="1TDSPC" 
                    rm="553813" 
                    photo="/vinicio.jpg" 
                    email='vinicioraphael2012@gmail.com'
                    linkedin='https://www.linkedin.com/in/vin%C3%ADcio-raphael-santana/' 
                />
            </div>
            <p className='m-4 text-blue-200 text-center'>OceanGuard &copy; 2024. Todos os direitos reservados.</p>
        </footer>
    );
}
