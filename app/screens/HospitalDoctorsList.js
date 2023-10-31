import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../shared/PageHeader.js'
import HospitalDoctorsTab from '../components/hospitalDoctors/HospitalDoctorsTab.js'
import HospitalList from '../components/hospitalDoctors/HospitalList.js'
import globalAPI from '../services/globalAPI.js'
import Colors from '../shared/Colors.js'

export default function HospitalDoctorsList() {
	const param = useRoute().params
	const [HospitalListing, setHospitalListing] = useState()
	const getHospitalsByCategory = () =>
		globalAPI
			.getHospitalsByCategory(param?.categoryName)
			.then((res) => setHospitalListing(res.data.data))
			.catch((e) => {
				console.error(e.message)
				return e
			})
	useEffect(() => {
		getHospitalsByCategory()
	}, [])
	return (
		<View style={{ padding: 20, marginTop: 15 }}>
			<PageHeader title={param?.categoryName} />
			<HospitalDoctorsTab />
			{!HospitalListing?.length ? (
				<ActivityIndicator
					size={'large'}
					color={Colors.PRIMARY}
					style={{ marginTop: '50%' }}
				/>
			) : (
				<HospitalList hospitalList={HospitalListing} />
			)}
		</View>
	)
}
