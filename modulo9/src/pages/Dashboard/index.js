import React, { useState, useMemo, useEffect } from 'react';
import { isBefore, isEqual, parseISO, format, subDays, addDays, setHours, setMinutes, setSeconds } from 'date-fns' 
import pt from 'date-fns/locale/pt'
import { utcToZonedTime } from 'date-fns-tz'
import api from '~/services/api'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function Dashboard() {
  const [date, setDate] = useState(new Date())
  const [schedule, setSchedule] = useState([])

  const dateFormatted = useMemo(() => (
    format(date,"d 'de' MMMM", { locale: pt })
  ),[date])
  
  useEffect(() => {
   async function loadSchedule(){
    const response = await api.get('agendamentos', {
      params: {date}
    })
    console.tron.log(response.data)
    // Pegar a timezone do navegador do usuário
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const data = range.map(hour => {
    const checkDate = setSeconds(setMinutes(setHours(date, hour),0),0)
    const compareDate = utcToZonedTime(checkDate, timeZone)

      return {
        time: `${hour}:00h`,
        past: isBefore(compareDate, new Date()),
        agendamento: response.data.find(a => 
          isEqual(parseISO(a.date), compareDate)  
        )
      }
    })
    setSchedule(data)
  }
  loadSchedule()
  }, [date])

  function handlePrevDay(){
    setDate(subDays(date, 1))
  }

  function handleNextDay(){
    setDate(addDays(date, 1))
  }

  return (
   <Container>
      <header>
        <button type='button' onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff"/>
        </button>
        <strong>{dateFormatted} </strong>
        <button type='button' onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff"/>
        </button>
     </header>

     <ul>
       {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.agendamento}>
          <strong> {time.time} </strong>
          <span> {time.agendamento ? time.agendamento.user.name : 'Em Aberto'} </span>
        </Time>
       ))}
     </ul>
   </Container>
  );
}
