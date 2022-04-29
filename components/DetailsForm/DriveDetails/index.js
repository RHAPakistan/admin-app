import React from 'react';
import { View, ScrollView } from 'react-native';

import TextLine from '../TextLine';
import TextDescription from '../TextDescription';

const DriveDetails = ({ data }) => {
	const TimeLine = data.creation_time ? (
		<TextLine index={0} label='Creation Time' value={data.creation_time} />
	) : (
		<TextLine index={0} label='Last Modified' value={data.last_modified} />
	);
	const convertTime =(date)=>{
        let formatDate = new Date(date);
        let hrs = formatDate.getHours()
        let mins = formatDate.getMinutes()
        if(hrs<=9)
        hrs = '0' + hrs
        if(mins<10)
        mins = '0' + mins
        let postTime = ''
        if(hrs<12)
            postTime= hrs + ':' + mins + ' AM'
        else{
            hrs = hrs -12
            postTime= hrs + ':' + mins + ' PM'
        }
        return postTime
    }
	return (
		<ScrollView>
			{/* Time When this drive was created or modified */}
			{TimeLine}

			{/* Drive Name / title */}
			<TextLine index={0} label='Drive Title' value={data.title} />


			<TextLine index={1} label='Drive Location' value={data.driveLocation} />

			{/* Drive lOCATION/ADDRESS (String) */}
			<TextLine index={2} label='Date-Time' value={(new Date(data.date)).toUTCString().substring(0, 16)+", " + convertTime(data.date)} />

			{/* Date when drive will happen */}
			<TextLine index={3} label='Duration of Drive' value={data.duration} />

			<TextLine index={4} label='Meetup Point' value={data.meetupPoint} />

			<TextLine index={5} label='Meetup Time' value={data.meetupTime} />

			<TextLine index={6} label='Departure Time' value={data.departureTime} />

			<TextLine index={7} label='For Whom' value={data.volunteerCategory} />

			{/* Food Description */}
			<TextDescription index={8} label='Drive Description' value={data.description} />

			{/* Volunteers Required */}
			<TextLine index={9} label='Volunteer Required' value={data.maxCount} />

			<TextLine index={10} label='Volunteer Registered' value={data.currentCount} />
		</ScrollView>
	);
};

export default DriveDetails;
