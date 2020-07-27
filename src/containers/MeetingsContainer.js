import React from "react"
import Box from '@material-ui/core/Box';
import Meeting from  "../components/Meeting"
import Button from '@material-ui/core/Button';


const MeetingsContainer = ({ meetings }) => {

  const renderMeetingCard = () => {
    return meetings.map(meeting =>
      < Meeting
        key={meeting.id}
        meeting={meeting}x
      />
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <h3>MEETINGS</h3>
         <span>
            <Button variant="outlined" color="secondary">
              ADD MEETING
            </Button>
          </span>
      <Box bgcolor="background.paper">

      <>
        {renderMeetingCard()}
      </>
      </Box>
    </div >
  )

}
export default MeetingsContainer;