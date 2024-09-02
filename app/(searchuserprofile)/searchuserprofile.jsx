import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserHeader from '../../components/SearchUserProfile/UserHeader'
import UserData from '../../components/SearchUserProfile/UserData'
import UserSetting from '../../components/User/UserSetting'
import { useRecoilValue } from 'recoil'
import searchuserAtom from '../../atoms/searchuserAtom'

const searchuserprofile = () => {

  const searchuser = useRecoilValue(searchuserAtom)
  return (
    <View style={{ paddingTop: 10 }}>
      <UserHeader username={searchuser?.username} />
      <UserData />
      <UserSetting height={0} />
    </View>
  )
}

export default searchuserprofile

const styles = StyleSheet.create({})