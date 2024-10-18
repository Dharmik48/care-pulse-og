import AppointmentForm from '@/components/AppointmentForm'
import {getPatientByUserId} from '@/lib/actions/patient.actions'
import Image from 'next/image'
import {NoPatientDetailsAlert} from "@/components/no-patient-details-alert";
import Link from "next/link";
import PasskeyModal from "@/components/PasskeyModal";

export const revalidate = 0

const NewAppointment = async ({ searchParams, params: { userId } }: SearchParamProps) => {
	const isAdmin = searchParams.admin === 'true'
	const { patient } = await getPatientByUserId(userId)

	if (!patient) return <main className='flex max-h-screen h-screen'>
		<div className='container my-auto h-[90%]'><NoPatientDetailsAlert id={userId}/></div></main>

			return (
			<main className='flex max-h-screen h-screen'>
				<div className='container my-auto h-[90%]'>
				{isAdmin && <PasskeyModal/>}
				<section className='sub-container max-w-xl justify-between h-full'>
					<Image
						src={'/assets/icons/logo-full.svg'}
						height={500}
						width={500}
						className='mb-12 h-10 w-max'
						alt='Care pulse logo'
					/>
					<AppointmentForm
						type='create'
						userId={userId}
						patientId={patient.$id}
						doctor={patient.primaryPhysician}
					/>
					<div className='flex justify-between text-14-regular items-center mt-8'>
						<p className='copyright'>
							&copy;carepulse {new Date().getFullYear()}
						</p>
						<Link href={'?admin=true'} className='text-green-500'>
							Admin
						</Link>
					</div>
				</section>
			</div>
			<Image
				src={'/assets/images/appointment-img.png'}
				width={750}
				height={750}
				className='side-img max-w-[30%] rounded-l-xl'
				alt='decoration image'
			/>
		</main>
	)
}

export default NewAppointment