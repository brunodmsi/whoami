import { createContext } from 'react'
import { Dependencies } from './dependencies'
import { dependencyTree } from './dependency-tree'

export const Container = createContext<Dependencies>(dependencyTree)
