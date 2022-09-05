import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Text } from 'react-native';
import { ContainerTimer } from './styles';
import { DecrementTimer } from '../../store/ducks/Timer';

type TimerProps = {
  timeOutFunc: Function,
}

export default function Timer({ timeOutFunc }: TimerProps) {
  const dispatch = useDispatch();
  const { timer } = useSelector((state: any) => state.reducerTimer);
  let IntervalId: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    const oneSecond = 1000;
    IntervalId = setInterval(() => {
      if (timer >= 1) {
        dispatch(DecrementTimer())
      }
    }, oneSecond);
    return () => clearInterval(IntervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      timeOutFunc();
      
      clearInterval(IntervalId);
    }
  }, [timer]);

  return (
    <ContainerTimer>
      <Text>{timer}</Text>
    </ContainerTimer>
  )
}