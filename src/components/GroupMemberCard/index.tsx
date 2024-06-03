import Image from 'next/image';
import MemberCardProps from './interface';
import Link from 'next/link';


export default function GroupMemberCard(props: MemberCardProps) {
    return (
        <div className="flex flex-col items-center justify-center p-7 m-3 hover:bg-blue-800 rounded-md hover:translate-y-2">
            <div className='pb-5'>
                <Link href={props.linkedin}>
                    <Image src={props.photo} alt={props.name} width={200} height={200} className="rounded-full" />
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-white text-lg m-1">{props.name}</p>
                <p className="text-white m-1">{props.course}</p>
                <p className="text-white m-1">RM: {props.rm}</p>
                <p className="text-white m-1">{props.email}</p>
            </div>
        </div>
    );
}