import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import RepositoryList from './RepositoryList';
import SignOut from './SignOut';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
    fontFamily: theme.fonts.main
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        {/* 精确路由匹配 exact 只有路由完全匹配才尽兴渲染 */}
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/login' element={<SignIn />} exact />
        <Route path='/signout' element={<SignOut />} exact />
        <Route path='/repositories/:id' element={<SingleRepository />} exact />
        <Route path='/reviews/create' element={<CreateReview />} />
        {/* 兜底路由 */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}

export default Main
