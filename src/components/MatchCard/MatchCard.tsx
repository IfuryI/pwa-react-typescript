import { Card, CardHeader, Avatar, CardContent, Box, Typography } from '@mui/material'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import type { Match } from 'models'
import { useState } from 'react'

export interface MatchCardProps {
  match: Match
}

export const MatchCard = ({ match }: MatchCardProps): JSX.Element => {
  const [collapsed, setIsCollapsed] = useState(true)

  return <Card>
    <CardHeader avatar={<Avatar src='../../assets/avatar.scg'></Avatar>}
      title={`${match.name}, ${match.age}`}
      subheader={`${match.location.country}, ${match.location.city}`}
      action={collapsed
        ? <MessageOutlinedIcon onClick={() => { setIsCollapsed(false) }} />
        : <KeyboardArrowUpOutlinedIcon onClick={() => { setIsCollapsed(true) }}/>
      }>
    </CardHeader>
    <CardContent>
      <Box sx={{ display: 'flex', flexDirection: collapsed ? 'row' : 'column', gap: '8px', marginLeft: '2rem' }}>
        {
          Boolean(match.contacts.email) && (collapsed
            ? <EmailOutlinedIcon></EmailOutlinedIcon>
            : <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <EmailOutlinedIcon></EmailOutlinedIcon><Typography>{match.contacts.email}</Typography>
            </Box>)
        }
        {
          Boolean(match.contacts.telegram) && (collapsed
            ? <TelegramIcon></TelegramIcon>
            : <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TelegramIcon></TelegramIcon><Typography>{match.contacts.telegram}</Typography>
            </Box>)
        }
        {
          Boolean(match.contacts.telephone) && (collapsed
            ? <PhoneOutlinedIcon></PhoneOutlinedIcon>
            : <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PhoneOutlinedIcon></PhoneOutlinedIcon><Typography>{match.contacts.telephone}</Typography>
            </Box>)
        }
        {
          Boolean(match.contacts.facebook) && (collapsed
            ? <FacebookOutlinedIcon></FacebookOutlinedIcon>
            : <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FacebookOutlinedIcon></FacebookOutlinedIcon><Typography>{match.contacts.facebook}</Typography>
            </Box>)
        }
        {
          Boolean(match.contacts.instagram) && (collapsed
            ? <InstagramIcon></InstagramIcon>
            : <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <InstagramIcon></InstagramIcon><Typography>{match.contacts.instagram}</Typography>
            </Box>)
        }
      </Box>
    </CardContent>
  </Card>
}
