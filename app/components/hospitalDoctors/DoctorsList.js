import { View, FlatList } from 'react-native'
import React from 'react'
import DoctorCard from '../../shared/DoctorCard'

export default function DoctorsList({ doctorList }) {
	return (
		<View style={{ marginTop: 15 }}>
			<FlatList
				data={doctorList}
				renderItem={({ item, index }) => <DoctorCard doctors={item} />}
			/>
		</View>
	)
}