import React, {useRef,forwardRef,useImperativeHandle } from 'react';
import { View } from 'react-native';
import TextInputLine from '../TextInputLineV2';
import Validations from './Validations';

const DriveForm = forwardRef(({ data },ref) => {
    const DriveLocationRef = useRef(0);
    const DateRef = useRef(1);
    const DurationRef = useRef(2);
    const VolunteerCategoryRef = useRef(3);
    const MeetupPointRef = useRef(4);
    const MeetupTimeRef = useRef(5);
    const DepartureTimeRef = useRef(6);
    const MaxCountRef = useRef(7);
    const DescriptionRef = useRef(8);

    useImperativeHandle(ref,()=>({
        validate:ValidateAllHandler,
        getValues:GetAllValues
    }))

    const ValidateAllHandler = ()=>{
        return (
            DriveLocationRef.current.validate() &&
            DateRef.current.validate() &&
            DurationRef.current.validate() &&
            VolunteerCategoryRef.current.validate() &&
            MeetupPointRef.current.validate() &&
            MeetupTimeRef.current.validate() &&
            DepartureTimeRef.current.validate() &&
            MaxCountRef.current.validate() &&
            DescriptionRef.current.validate()
        )
    }

    const GetAllValues = ()=>{
        return {
            driveLocation: DriveLocationRef.current.getValues(),
            date: DateRef.current.getValues(),
            duration: DurationRef.current.getValues(),
            volunteerCategory: VolunteerCategoryRef.current.getValues(),
            meetupPoint: MeetupPointRef.current.getValues(),
            meetupTime: MeetupTimeRef.current.getValues(),
            departureTime: DepartureTimeRef.current.getValues(),
            maxCount: MaxCountRef.current.getValues(),
            description: DescriptionRef.current.getValues()
        }
    }

    return (
        <View>
            <TextInputLine
                ref = {DriveLocationRef}
                index = {0}
				label={'Drive Location'}
				value={data.driveLocation}
				placeholder='Mubarak Village'
				validate={Validations.DriveLocation}
			/>
            <TextInputLine
                ref = {DateRef}
                index={1}
				label={'Drive Date'}
				value={data.date}
				placeholder='Sunday, 12th Feburary'
				validate={Validations.Date}
			/>

			<TextInputLine
                ref = {DurationRef}
				index={2}
				label={'Drive Duration'}
				value={data.duration}
				placeholder='5-6 hours'
				validate={Validations.Duration}
			/>
			<TextInputLine
                ref = {VolunteerCategoryRef}
				index={3}
				label={'Volunteer Category'}
				value={data.volunteerCategory}
				placeholder='all/male/female'
				validate={Validations.VolunteerCategory}
			/>
			<TextInputLine
                ref = {MeetupPointRef}
				index={4}
				label={'Meetup Location'}
				value={data.meetupPoint}
				placeholder='KFC, Johar 12 branch'
				validate={Validations.MeetupPoint}
			/>
			<TextInputLine
                ref = {MeetupTimeRef}
				index={5}
				label={'Meetup Time'}
				value={data.meetupTime}
				placeholder='8:30 am'
				validate={Validations.MeetupTime}
			/>
			<TextInputLine
                ref = {DepartureTimeRef}
				index={6}
				label={'Departure time'}
				value={data.departureTime}
				placeholder='When leaving for drive (i.e. 9:00 am)'
				validate={Validations.DepartureTime}
			/>
			<TextInputLine
                ref = {MaxCountRef}
				index={7}
				label={'Volunteers required'}
				value={data.maxCount}
				placeholder='50'
				validate={Validations.MaxCount}
			/>

			<TextInputLine
                ref = {DescriptionRef}
				index={8}
				label={'Description of Drive'}
				value={data.description}
				placeholder='Brief description/guideline about your Drive'
				validate={Validations.Description}
			/>
        </View>
    )
})

export default DriveForm;
