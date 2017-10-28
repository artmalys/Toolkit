package de.proteinevolution.models.database.results
import javax.inject.{ Inject, Singleton }

import play.api.libs.json._

/**
 * Created by drau on 20.04.17.
 */
case class AlignmentItem(accession: String, seq: String, num: Int)
case class AlignmentResult(alignment: List[AlignmentItem])
@Singleton
class Alignment @Inject()() {

  def parseAlignment(jsArray: JsArray): AlignmentResult = jsArray match {
    case obj: JsArray =>
      try {
        var alignment = obj.as[List[JsArray]]
        val list = alignment.zipWithIndex.map {
          case (data, index) =>
            parseAlignmentItem(data, index.toInt + 1)
        }
        AlignmentResult(list)
      } finally {}
  }
  def parseAlignmentItem(jsArray: JsArray, index: Int): AlignmentItem = jsArray match {
    case arr: JsArray =>
      try {
        val accession = (arr \ 0).as[String]
        val seq       = (arr \ 1).as[String]
        AlignmentItem(accession, seq, index)
      } finally {}
  }
}
case class SingleSeq(accession: String, seq: String)

class General() {

  private val accessionMalFormat = """.*\|(.*)\|.*""".r

  def parseSingleSeq(jsArray: JsArray): SingleSeq = jsArray match {
    case arr: JsArray =>
      try {
        val accession = (arr \ 0 \ 0).get.as[String]
        val seq       = (arr \ 0 \ 1).get.as[String]
        SingleSeq(accession, seq)
      } finally {}
  }

  def refineAccession(seq: String): String = seq match {
    case this.accessionMalFormat(group) => group
    case _                              => seq
  }

}

object General {
  case class DTParam(sSearch: String, iDisplayStart: Int, iDisplayLength: Int, iSortCol: Int, sSortDir: String)
}