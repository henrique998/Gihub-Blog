import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { SearchContextProvider } from './contexts/SearchContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <SearchContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />

          <GlobalStyle />
        </ThemeProvider>
      </SearchContextProvider>
    </BrowserRouter>
  )
}
