import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import searchuserAtom from '../../atoms/searchuserAtom'
import UserData from '../../components/SearchUserProfile/UserData'
import UserHeader from '../../components/SearchUserProfile/UserHeader'

const searchuserprofile = () => {

  const searchuser = useRecoilValue(searchuserAtom)


  return (
    <View style={{ paddingTop: 10 }}>
      <UserHeader username={searchuser?.username} />
      <UserData />
    </View>
  )
}

export default searchuserprofile

const styles = StyleSheet.create({})