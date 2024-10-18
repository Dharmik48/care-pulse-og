import PatientForm from '@/components/PatientForm'
import {getPatientByUserId, getUser} from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'
import {redirect} from "next/navigation";

const Register = async ({ params: { userId } }: SearchParamProps) => {
	const {patient} = await getPatientByUserId(userId)

	if(patient) return redirect(`/patients/${userId}/new-appointment`)

	const user = await getUser(userId)

	return (
		<main className='flex max-h-screen h-screen'>
			<div className='container remove-scrollbar'>
				<section className='sub-container max-w-3xl py-10 h-full'>
					<Image
						src={'/assets/icons/logo-full.svg'}
						height={500}
						width={500}
						className='mb-12 h-10 w-max'
						alt='Care pulse logo'
					/>
					<PatientForm user={user}/>
					<div className='flex justify-between text-14-regular items-center mt-8'>
						<p className='copyright'>
							&copy;carepulse {new Date().getFullYear()}
						</p>
						<Link href={'/?admin=true'} className='text-green-500'>
							Admin
						</Link>
					</div>
				</section>
			</div>
			<Image
				src={'/assets/images/register-img.png'}
				width={1000}
				height={1000}
				className='side-img max-w-[30%] rounded-l-xl'
				alt='register welcome'
			/>
		</main>
	)
}

export default Register