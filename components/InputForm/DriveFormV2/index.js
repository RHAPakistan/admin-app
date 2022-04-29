import React, {useRef,forwardRef,useImperativeHandle, useState } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import TextInputLine from '../TextInputLineV2';
import Validations from './Validations';
import DatePicker from 'react-native-date-picker'
import {Picker} from '@react-native-picker/picker';

const DriveForm = forwardRef(({ data },ref) => {
	const [volunteerCategory, setVolunteerCategory] = useState("all");
	const [date, setDate] = useState(new Date())
	const [open, setOpen] = useState(false)

	const TitleRef = useRef(0);
    const DriveLocationRef = useRef(1);
    //const DateRef = useRef(1);
    const DurationRef = useRef(2);
    //const VolunteerCategoryRef = useRef(3);
    const MeetupPointRef = useRef(3);
    const MeetupTimeRef = useRef(4);
    const DepartureTimeRef = useRef(5);
    const MaxCountRef = useRef(6);
    const DescriptionRef = useRef(7);

    useImperativeHandle(ref,()=>({
        validate:ValidateAllHandler,
        getValues:GetAllValues
    }))

    const ValidateAllHandler = ()=>{
        return (
            DriveLocationRef.current.validate() &&
            //DateRef.current.validate() &&
			TitleRef.current.validate() &&
            DurationRef.current.validate() &&
            //VolunteerCategoryRef.current.validate() &&
            MeetupPointRef.current.validate() &&
            MeetupTimeRef.current.validate() &&
            DepartureTimeRef.current.validate() &&
            MaxCountRef.current.validate() &&
            DescriptionRef.current.validate()
        )
    }

    const GetAllValues = ()=>{
        return {
			title: TitleRef.current.getValues(),
            driveLocation: DriveLocationRef.current.getValues(),
			date: date,
            duration: DurationRef.current.getValues(),
            volunteerCategory: volunteerCategory,
            meetupPoint: MeetupPointRef.current.getValues(),
            meetupTime: MeetupTimeRef.current.getValues(),
            departureTime: DepartureTimeRef.current.getValues(),
            maxCount: MaxCountRef.current.getValues(),
            description: DescriptionRef.current.getValues()
        }
    }

    return (
        <ScrollView>
			<TextInputLine
                ref = {TitleRef}
                index={0}
				label={'Title'}
				value={data.date}
				placeholder='Rain Relief Drive'
				validate={Validations.Title}
			/> 
            <TextInputLine
                ref = {DriveLocationRef}
                index = {1}
				label={'Drive Location'}
				value={data.driveLocation}
				placeholder='Mubarak Village'
				validate={Validations.DriveLocation}
			/>
			<Text style={{marginLeft: '5%', fontSize: 16}}>Set Date:</Text>
			<View style={{maxWidth: '90%', marginLeft: '5%'}}>
				<Button title="Open Calender" onPress={() => setOpen(true)} />
			</View>
			<DatePicker
				modal
				mode = "datetime"
				minimumDate = {new Date()}
				open={open}
				date={date}
				onConfirm={(date) => {
					console.log("Set Date is : ", date)
					setOpen(false)
					setDate(date)
				}}
				onCancel={() => {
					setOpen(false)
				}}
			/>

			<TextInputLine
                ref = {DurationRef}
				index={2}
				label={'Drive Duration'}
				value={data.duration}
				placeholder='5-6 hours'
				validate={Validations.Duration}
			/>

			{/* <TextInputLine
                ref = {VolunteerCategoryRef}
				index={3}
				label={'Volunteer Category'}
				value={data.volunteerCategory}
				placeholder='all/male/female'
				validate={Validations.VolunteerCategory}
			/> */}
			<Text style={{marginLeft: '5%', fontSize: 16}}>Volunteer Category:</Text>
			<Picker
				style={{backgroundColor: 'white', maxWidth: '90%', marginLeft: '5%'}}
				selectedValue={volunteerCategory}
				onValueChange={(itemValue, itemIndex) =>{
					console.log("Selected Value: ",itemValue)
					setVolunteerCategory(itemValue)
				}}>
				<Picker.Item label="All" value="all" />
				<Picker.Item label="Male" value="male" />
				<Picker.Item label="Female" value="female" />
			</Picker>
			<TextInputLine
                ref = {MeetupPointRef}
				index={3}
				label={'Meetup Location'}
				value={data.meetupPoint}
				placeholder='KFC, Johar 12 branch'
				validate={Validations.MeetupPoint}
			/>
			<TextInputLine
                ref = {MeetupTimeRef}
				index={4}
				label={'Meetup Time'}
				value={data.meetupTime}
				placeholder='8:30 am'
				validate={Validations.MeetupTime}
			/>
			<TextInputLine
                ref = {DepartureTimeRef}
				index={5}
				label={'Departure time'}
				value={data.departureTime}
				placeholder='When leaving for drive (i.e. 9:00 am)'
				validate={Validations.DepartureTime}
			/>
			<TextInputLine
                ref = {MaxCountRef}
				index={6}
				label={'Volunteers required'}
				value={data.maxCount}
				placeholder='50'
				validate={Validations.MaxCount}
			/>

			<TextInputLine
                ref = {DescriptionRef}
				index={7}
				label={'Description of Drive'}
				value={data.description}
				placeholder='Brief description/guideline about your Drive'
				validate={Validations.Description}
			/>
        </ScrollView>
    )
})

export default DriveForm;
