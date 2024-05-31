import Image from 'next/image';
import GroupMemberCard from './GroupMemberCard';

export default function Footer() {
    return (
        <footer className="bg-blue-600 flex flex-col items-center">
            <h1 className="text-white text-2xl m-9">GROUP MEMBERS</h1>
            <div className='flex flex-row'>
                <GroupMemberCard name="ARTHUR FENILI" 
                    course="Análise e Desenvolvimento de Sistemas" 
                    rm="552752" photo="/arthur.jpg" 
                    email='arthur.fenili@hotmail.com' 
                    linkedin='https://www.linkedin.com/in/arthur-fenili/'/>
                <GroupMemberCard name="ENZO ANTUNES" 
                    course="Análise e Desenvolvimento de Sistemas" 
                    rm="553185" photo="/enzo.jpg" 
                    email='enzo2004antunes@gmail.com' 
                    linkedin='https://www.linkedin.com/in/enzo-antunes/'/>
                <GroupMemberCard name="VINICIO RAPHAEL" 
                    course="Análise e Desenvolvimento de Sistemas" 
                    rm="553813" photo="/vinicio.jpg" 
                    email='vinicioraphael2012@gmail.com'
                    linkedin='https://www.linkedin.com/in/vin%C3%ADcio-raphael-santana/'/>
            </div>
            <p className='m-4 text-blue-200'>Todos os direitos reservados. &copy; 2024</p>
        </footer>
    );
}