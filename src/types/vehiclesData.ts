export interface VehiclesData {
  vehicles: Vehicle[]
}

export interface Vehicle {
  __typename: string
  title: string
  description: string
  icons: Icons
  level: number
  type: Type
  nation: Nation
}

export interface Icons {
  __typename: string
  large: string
  medium: string
}

export interface Type {
  __typename: string
  name: string
  title: string
  icons: Icons2
}

export interface Icons2 {
  __typename: string
  default: string
}

export interface Nation {
  __typename: string
  name: string
  title: string
  color: string
  icons: Icons3
}

export interface Icons3 {
  __typename: string
  small: string
  medium: string
  large: string
}
