import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import GitIssues from './screens/gitissues'
import ListIssues from './screens/listIssues'

const Routes = createAppContainer(createSwitchNavigator({
    GitIssues,
    ListIssues
}))

export default Routes;