import React from 'react';
import { MdNotifications } from 'react-icons/md'
import { Container, Badge, NotificationList, Notification , Scroll} from './styles';

export default function Notifications() {
  return (
   <Container>
      <Badge hasUnread>
       <MdNotifications size={20} color="#7159c1" />
      </Badge>
      <NotificationList>
        <Scroll>
        <Notification unread>
          <p> Você possui um novo agendamento para amanhã </p>
          <time> há dois dias </time>
          <button type="button"> Marcar como lido </button>
        </Notification>
        <Notification unread>
          <p> Você possui um novo agendamento para amanhã </p>
          <time> há dois dias </time>
          <button type="button"> Marcar como lido </button>
        </Notification>
        <Notification unread>
          <p> Você possui um novo agendamento para amanhã </p>
          <time> há dois dias </time>
          <button type="button"> Marcar como lido </button>
        </Notification>
        <Notification>
          <p> Você possui um novo agendamento para amanhã </p>
          <time> há dois dias </time>
          <button type="button"> Marcar como lido </button>
        </Notification>
        <Notification>
          <p> Você possui um novo agendamento para amanhã </p>
          <time> há dois dias </time>
          <button type="button"> Marcar como lido </button>
        </Notification>
        </Scroll>
      </NotificationList>
   </Container>
  );
}
