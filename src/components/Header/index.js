import React from 'react'
import HeaderMobileArea from './HeaderMobileArea'
import HeaderTopArea from './HeaderTopArea'
import HeaderBottomContent from './HeaderBottomContent'
import HeaderOverlayContent from './HeaderOverlayContent'

const Header = () => {
    return (
        <>
            <HeaderMobileArea></HeaderMobileArea>
            <HeaderTopArea></HeaderTopArea>
            <HeaderBottomContent></HeaderBottomContent>
            <HeaderOverlayContent></HeaderOverlayContent>
        </>
    )
}

export default Header
