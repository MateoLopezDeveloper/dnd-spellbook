
export interface Classdnd {
  index: string;
  name: string;
  url: string;
}

export interface resp {
  results: Classdnd[];
}

export interface TheSpell {
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: string[];
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  school: School;
  classes: School[];
  subclasses: School[];
  url: string;
}

interface School {
  index: string;
  name: string;
  url: string;
}