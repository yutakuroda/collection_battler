export default function(attack, defence, func) {
//func function(a,d,j)=>{}
 //TODO jsonの値をパース+attack_type,defence_type,attack_power,defence_powerを取得
 // ndcどうすんねん？
 const judgePower = (id) => {
   let power = 0;
   let i = 0;
   for (i=0; i<id.length; i++) {
     if (id.charAt(i) == '-' || id.charAt(i) == '_' || id.charAt(i) == /A-Z/) {
       power++;
     }
     power++;
   }
   return power;
 };
 const judgeResult = (a,d) => {
   const type_table = [
     // 0:総記
     // 1:哲学
     // 2:歴史
     // 3:社会科学
     // 4:自然科学
     // 5:技術工学
     // 6:産業
     // 7:芸術
     // 8:言語
     // 9:文学
     [1,1,1,1,1,1,1,1,1,1],
     [1,2,1,1,'a',1,1,2,2,1],
     [2,1,1,1,1,'a',1,1,1,1],
     [1,1,2,1,2,1,1,'a',1,'a'],
     [1,'a',1,2,1,1,1,1,1,1,],
     [1,2,1,1,1,1,'a',1,'a',1],
     [1,1,1,'a',1,1,1,1,1,1],
     [1,1,1,2,1,1,1,'a',2,1],
     [1,2,1,1,'a','a',1,1,1,2],
     [1,1,'a',1,1,1,'a',1,1,1]
   ];
   console.log(a);
   console.log(a.type);
   console.log(d.type);
   let res = '';
   if (type_table[a.type][d.type] == 'a') {
     res = a.power/2 > d.power ? true : false;
   } else {
     res = a.power * type_table[a.type][d.type] > d.power ? true : false;
   }
   if (res) {
     return a;
   } else { return d; }
 };
 const attacker = {
   type: "",
   power: judgePower(attack.common.id),
   id: attack.common.id
 };
 const defencer =  {
   type:"",
   power: judgePower(defence.common.title),
   id: defence.common.id
 };
 // fetch(https://lab.ndl.go.jp/ndc/api/predict?bib=${attack.common.title}, {method: 'POST'})
 // .then(ret=>{
 //   console.info(ret);
 //    let json =ret.response.json();
 //      attacker.type=json[0].value;
 //    fetch(https://lab.ndl.go.jp/ndc/api/predict?bib=${defense.common.title}, {method: 'POST'})
 //    .then(ret=>{
 //       let json =ret.response.json();
 //       defense.type=json[0].value;
 //       func(attacker,defencer,judgeResult(attacker,defencer));
 //   });
 // });
 fetch(`https://lab.ndl.go.jp/ndc/api/predict?bib=${attack.common.title}`, {method: 'POST'})
 .then(response=>{
    return response.json();
   })
 .then (data => {
     attacker.type = data[0].value.charAt(0);
     fetch(`https://lab.ndl.go.jp/ndc/api/predict?bib=${defence.common.title}`, {method: 'POST'})
       .then(response => response.json())
       .then( data => {
         defencer.type = data[0].value.charAt(0);
         func(attacker,defencer,judgeResult(attacker,defencer));
     })
    }
  );
}
