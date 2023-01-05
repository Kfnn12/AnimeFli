import React from 'react'
import {Outlet} from "react-router-dom"
import { DashboardWrapperContainer } from './styles';

interface Props {
  header?: React.ReactNode;
  sideNav?: React.ReactNode;
}

export default function DashboardWrapper( props: React.PropsWithChildren<Props>) {
  return (
      <DashboardWrapperContainer>
        <div className='sideNav'>{props.sideNav}</div>
        <div className="children">
          {props.header}
          <Outlet/>
          {props.children}
        </div>
      </DashboardWrapperContainer>
  )
}

