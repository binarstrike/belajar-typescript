/**
 * `class` pada typescript sama saja seperti javacript namun dengan fitur yang lebih advance
 */

interface IAbility {
  attack: number
  def: number
  hp: number
}
interface IPlayerML {
  name: string
  hero: string
}
interface IHeroAbility {
  levelUp(level: number): void
}
class Player {
  // kita bisa langsung mendefinisikan properti di dalam class
  private _player: IPlayerML
  // `private` properti hanya bisa diakses di dalam lingkup parent class
  // tapi jika `protected` bisa diakses oleh sub class
  private currentLevel: number
  protected heroAbillity: IAbility
  // kita juga bisa membuat properti agar hanya dapat dibaca saja tidak bisa dirubah nilai nya
  private readonly defaultLevel: number = 1
  private readonly defaultAbillity: IAbility = {
    attack: 100,
    def: 90,
    hp: 1500,
  }
  constructor(player: IPlayerML) {
    this._player = player
    this.currentLevel = this.defaultLevel
    this.heroAbillity = this.defaultAbillity
  }

  static get getGameName(): string {
    return "Mobile Legend"
  }

  displayPlayerInfo(): void {
    console.log({
      Player: this._player.name,
      Hero: this._player.hero,
      Level: this.currentLevel,
      Abillity: this.heroAbillity,
    })
  }
}

class GameML extends Player implements IHeroAbility {
  // constructor(player: IPlayerML) {
  //   super(player)
  // }
  levelUp(level: number): void {
    this.heroAbillity.attack += 12 * level
    this.heroAbillity.def += 8 * level
    this.heroAbillity.hp += 150 * level
  }
}

console.log(Player.getGameName)
const player1: IPlayerML = { name: "Ucup", hero: "Lancelot" }
const newPlayer1 = new GameML(player1)
newPlayer1.displayPlayerInfo()
newPlayer1.levelUp(3)
newPlayer1.displayPlayerInfo()
