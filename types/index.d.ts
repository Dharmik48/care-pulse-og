/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
	params: { [key: string]: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

declare type Gender = 'male' | 'female' | 'other'
declare type Status = 'pending' | 'scheduled' | 'cancelled'

declare interface CreateAccountParams {
	name: string
	email: string
	password: string
}
declare interface User extends CreateAccountParams {
	$id: string
}

declare interface RegisterUserParams extends CreateAccountParams {
	userId: string
	birthDate: Date
	gender: Gender
	address: string
	occupation: string
	emergencyContactName: string
	emergencyContactNumber: string
	primaryPhysician: string
	insuranceProvider: string
	insurancePolicyNumber: string
	allergies: string | undefined
	currentMedications: string | undefined
	familyMedicalHistory: string | undefined
	pastMedicalHistory: string | undefined
	identificationType: string | undefined
	identificationNumber: string | undefined
	identificationDocument: FormData | undefined
	privacy: boolean
}

declare type CreateAppointmentParams = {
	userId: string
	patient: string
	primaryPhysician: string
	reason: string
	schedule: Date
	status: Status
	note: string | undefined
}

declare type UpdateAppointmentParams = {
	appointmentId: string
	userId: string
	appointment: Appointment
	type: string
}