import { ReactNode } from 'react'
import { Container } from './styles'

const BlogContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="view">
        <div className="blog">{children}</div>
      </div>
    </Container>
  )
}

export default BlogContainer
