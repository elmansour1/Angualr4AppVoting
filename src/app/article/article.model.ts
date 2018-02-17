export class Article {
  title: String;
  link: String;
  votes: number;

  constructor(title: String, link: String, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  upVote(): void{
    this.votes +=1;
  }

  upDown(): void{
    this.votes -=1;
  }

  domain(): String {
    try{
      const domainAndPath : String = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    }catch(err){
      return null;
    }
  }
}